import { useInView, animated } from '@react-spring/web'

export default function MyComponent() {
    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
            },
        }),
        {
            rootMargin: '-40% 0%',
        }
    )

    return (
        <animated.div ref={ref} style={springs}>
            Hello World
        </animated.div>
    )
}