import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portrait from "@/assets/lakshmi-portrait.jpg";
import f1 from "@/assets/f1.jpeg";
import f2 from "@/assets/f2.jpeg";
import f3 from "@/assets/f3.jpeg";
import f4 from "@/assets/f4.jpeg";
import { SectionHeading } from "../SectionHeading";

const gravityImages = [portrait, f1, f2, f3, f4];

gsap.registerPlugin(ScrollTrigger);

export function GravitySection() {
    const [isInView, setIsInView] = useState(false);
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const requestRef = useRef<number | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const prevMouseRef = useRef({ x: 0, y: 0 });
    const [bubbleStates, setBubbleStates] = useState<any[]>([]);
    const startedRef = useRef(false);

    // --- Physics Engine Setup ---
    useEffect(() => {
        if (!sceneRef.current) return;

        const { Engine, World, Bodies, Runner } = Matter;
        const engine = Engine.create();
        engineRef.current = engine;
        engine.world.gravity.y = 1.5; // Adjusted for a more elegant "floaty" feel

        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        const wallOptions = { isStatic: true, friction: 0.1, restitution: 0.6 };
        const ground = Bodies.rectangle(width / 2, height + 10, width, 100, wallOptions);
        const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions);
        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions);
        World.add(engine.world, [ground, leftWall, rightWall]);

        const runner = Runner.create();
        Runner.run(runner, engine);

        const handleMouseMove = (e: MouseEvent) => {
            if (!sceneRef.current) return;
            const rect = sceneRef.current.getBoundingClientRect();
            prevMouseRef.current = { ...mouseRef.current };
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };
        window.addEventListener('mousemove', handleMouseMove);

        const update = () => {
            const bodies = engine.world.bodies.filter(body => !body.isStatic);
            const mouseDX = mouseRef.current.x - prevMouseRef.current.x;
            const mouseDY = mouseRef.current.y - prevMouseRef.current.y;
            const mouseSpeed = Math.sqrt(mouseDX * mouseDX + mouseDY * mouseDY);

            bodies.forEach(body => {
                const dx = body.position.x - mouseRef.current.x;
                const dy = body.position.y - mouseRef.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const radius = 150;
                if (distance < radius) {
                    const forceMagnitude = (1 - distance / radius) * (mouseSpeed * 0.003 + 0.008);
                    Matter.Body.applyForce(body, body.position, {
                        x: (mouseDX * 0.005) + (dx / distance * forceMagnitude),
                        y: (mouseDY * 0.005) + (dy / distance * forceMagnitude)
                    });
                }
            });

            prevMouseRef.current = { ...mouseRef.current };

            setBubbleStates(
                bodies.map(body => ({
                    id: body.id,
                    x: body.position.x,
                    y: body.position.y,
                    angle: body.angle,
                    img: body.userData?.img,
                    size: body.userData?.size
                }))
            );
            requestRef.current = requestAnimationFrame(update);
        };
        requestRef.current = requestAnimationFrame(update);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            Runner.stop(runner);
            World.clear(engine.world, false);
            Engine.clear(engine);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // --- ScrollTrigger Initialization ---
    useEffect(() => {
        if (!sceneRef.current) return;

        const trigger = ScrollTrigger.create({
            trigger: sceneRef.current,
            start: "top 90%",
            onEnter: () => setIsInView(true),
            onEnterBack: () => setIsInView(true),
            onLeave: () => {
                setIsInView(false);
                startedRef.current = false;
            },
            onLeaveBack: () => {
                setIsInView(false);
                startedRef.current = false;
            }
        });

        return () => trigger.kill();
    }, []);

    // --- Ball Drop Trigger ---
    useEffect(() => {
        if (isInView && engineRef.current && !startedRef.current) {
            startedRef.current = true;
            const { Bodies, World, Body } = Matter;
            const width = sceneRef.current?.clientWidth || 800;

            const isMobile = width < 768;
            const bubbleCount = isMobile ? 40 : 85;
            const minSize = isMobile ? 45 : 65;
            const sizeRange = isMobile ? 15 : 25;

            let spawnedCount = 0;
            const batchSize = isMobile ? 4 : 8;

            const interval = setInterval(() => {
                const batch: Matter.Body[] = [];
                for (let i = 0; i < batchSize && spawnedCount < bubbleCount; i++) {
                    const size = minSize + Math.random() * sizeRange;
                    const x = Math.random() * width;
                    const y = -Math.random() * 200 - 100;
                    const img = gravityImages[spawnedCount % gravityImages.length];

                    const body = Bodies.circle(x, y, size / 2, {
                        restitution: 0.7,
                        friction: 0.1,
                        frictionAir: 0.02,
                        userData: { img, size }
                    });

                    Body.setVelocity(body, {
                        x: (Math.random() - 0.5) * 3,
                        y: 8 + Math.random() * 4
                    });

                    batch.push(body);
                    spawnedCount++;
                }

                if (engineRef.current) {
                    World.add(engineRef.current.world, batch);
                }

                if (spawnedCount >= bubbleCount) {
                    clearInterval(interval);
                }
            }, 60);

            return () => clearInterval(interval);
        } else if (!isInView && engineRef.current) {
            const { World } = Matter;
            const bodiesToRemove = engineRef.current.world.bodies.filter(b => !b.isStatic);
            World.remove(engineRef.current.world, bodiesToRemove);
        }
    }, [isInView]);

    return (
        <section className="relative w-full py-16 bg-background overflow-hidden border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 relative z-10 pointer-events-none mb-12">
                <SectionHeading eyebrow="Interactive" title="Hit the Short" />
                <p className="mt-4 text-white/40 font-light max-w-xl mx-auto uppercase tracking-[0.3em] text-[10px] text-center">
                    Touch and play with the creative elements.
                </p>
            </div>

            <div className="relative w-full h-[40vh] md:h-[50vh]">
                <div ref={sceneRef} className="absolute inset-0 z-0" />

                <div className="relative w-full h-full pointer-events-none">
                    {bubbleStates.map((b) => (
                        <div
                            key={b.id}
                            className="absolute flex items-center justify-center rounded-full overflow-hidden shadow-luxury border border-gold/30 backdrop-blur-sm"
                            style={{
                                width: b.size,
                                height: b.size,
                                left: 0,
                                top: 0,
                                transform: `translate(${b.x - b.size / 2}px, ${b.y - b.size / 2}px) rotate(${b.angle}rad)`,
                                transition: 'none'
                            }}
                        >
                            <img
                                src={b.img}
                                alt="Creative Element"
                                className="w-full h-full object-cover scale-110"
                            />
                            {/* Inner Glow/Shadow for 3D effect */}
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
