import React, { useState, useEffect, useRef } from 'react';

const StatCounter = ({ value, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0;
                const end = parseInt(value.replace(/,/g, ''));
                const duration = 2000;
                const increment = end / (duration / 16);

                const animate = () => {
                    start += increment;
                    if (start < end) {
                        setCount(Math.ceil(start));
                        requestAnimationFrame(animate);
                    } else {
                        setCount(end);
                    }
                };
                requestAnimationFrame(animate);
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="text-center">
            <p className="text-5xl md:text-6xl font-extrabold text-emerald-600 font-heading">{Math.ceil(count).toLocaleString()}+</p>
            <p className="text-lg text-gray-500 font-body">{label}</p>
        </div>
    );
};

export default StatCounter;
