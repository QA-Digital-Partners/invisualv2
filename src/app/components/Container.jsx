export default function Container({ children, className, ...props }) {
    return (
        <div className={`lg:max-w-[1200px] px-6 lg:px-0 w-full mx-auto ${className}`} {...props}>
            {children}
        </div>
    )
}