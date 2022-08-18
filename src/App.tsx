import './App.css'
import { gsap } from 'gsap'
import { useEffect, useRef, forwardRef } from 'react'

type BoxProps = {
    children: React.ReactNode
    ref: React.Ref<HTMLDivElement>
}
type ContainerProps = {
    // onMouseEnter: () => void
    // onMouseLeave: () => void
}
const Box = forwardRef<HTMLDivElement, BoxProps>(({ children }, ref) => {
    return (
        <div ref={ref} className='box'>
            {children}
        </div>
    )
})

const Container = (props: ContainerProps) => {
    const onLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        gsap.to(e.currentTarget, {
            backgroundColor: '#e77614',
            scale: 1,
        })
    }
    const onEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        gsap.to(e.currentTarget, {
            backgroundColor: '#f5f5f5',
            scale: 1.2,
        })
    }

    return (
        <div
            className='container'
            onMouseLeave={onLeave}
            onMouseEnter={onEnter}
        >
            <Box>I'm NOT</Box>
        </div>
    )
}

function App() {
    const boxRef = useRef<HTMLDivElement>(null)
    const box2Ref = useRef<HTMLDivElement>(null)
    const q = gsap.utils.selector(box2Ref)

    useEffect(() => {
        gsap.to(boxRef.current, {
            rotation: '+=360',
        })
    }, [])
    useEffect(() => {
        gsap.to(q('.box'), {
            x: 100,
            stagger: 0.13,
            repeat: -1,
            repeatDelay: 1,
            yoyo: true,
        })
    }, [q])

    const box1 = useRef<HTMLDivElement>(null)
    const box2 = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const boxes = [box1.current, box2.current]

        // target each box and stagger the animation
        gsap.to(boxes, {
            x: 100,
            stagger: 0.13,
            repeat: -1,
            repeatDelay: 1,
            yoyo: true,
        })
    }, [])

    return (
        <div className='App'>
            <header className='App-header'>
                <p ref={boxRef}>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
                <div ref={box2Ref}>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <div>
                    <Box ref={box1}>Box</Box>
                    <Container />
                    <Box ref={box2}>Box</Box>
                </div>
            </header>
        </div>
    )
}

export default App
