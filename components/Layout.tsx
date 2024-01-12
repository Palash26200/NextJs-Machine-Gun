import { ReactElement } from "react";

interface LayoutProps{
    children: ReactElement
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
    return (
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            {children}
        </section>
    )
}

export default Layout;