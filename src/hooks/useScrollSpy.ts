import {useEffect, useState} from 'react'

/**
 * Tracks which section is being read and whether the page has left the top.
 * A section becomes active once its top crosses 40% of the viewport. At the very
 * bottom the last section wins, since a short final section never reaches that line.
 */
export function useScrollSpy(ids: readonly string[]) {
    const [activeId, setActiveId] = useState<string | null>(null)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        let frame = 0

        const update = () => {
            frame = 0
            const {innerHeight, scrollY} = window
            const atBottom = scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 2
            let current: string | null = null

            for (const id of ids) {
                const top = document.getElementById(id)?.getBoundingClientRect().top
                if (top !== undefined && top <= innerHeight * 0.4) current = id
            }

            setActiveId(atBottom ? ids[ids.length - 1] : current)
            setIsScrolled(scrollY > 8)
        }

        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', schedule, {passive: true})
        window.addEventListener('resize', schedule)
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', schedule)
            window.removeEventListener('resize', schedule)
        }
    }, [ids])

    return {activeId, isScrolled}
}
