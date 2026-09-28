import type {SVGProps} from 'react'

type IconProps = SVGProps<SVGSVGElement>

/** Minimal line icons drawn on one 16px grid with a single 1.5 stroke weight. */
function Icon({children, ...props}: IconProps) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            {children}
        </svg>
    )
}

export function ArrowUpRightIcon(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M4.75 11.25 11.25 4.75M5.75 4.75h5.5v5.5"/>
        </Icon>
    )
}

export function ArrowDownIcon(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M8 2.75v10.5M3.75 9 8 13.25 12.25 9"/>
        </Icon>
    )
}

export function ArrowUpIcon(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M8 13.25V2.75M3.75 7 8 2.75 12.25 7"/>
        </Icon>
    )
}

export function CopyIcon(props: IconProps) {
    return (
        <Icon {...props}>
            <rect x="5.75" y="5.75" width="7.5" height="7.5" rx="1.5"/>
            <path d="M10.25 5.75v-1.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v4.5a1.5 1.5 0 0 0 1.5 1.5h1.5"/>
        </Icon>
    )
}

export function CheckIcon(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3.25 8.5 6.5 11.75l6.25-7"/>
        </Icon>
    )
}
