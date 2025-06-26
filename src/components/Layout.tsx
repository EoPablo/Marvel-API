import Navbar from "./Navbar";


interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({children}: LayoutProps){
    return (
        <>
            <Navbar/>

            <main className="max-w-7xl mx-auto px-4 py-8">
                {children}
            </main>
        
        </>
    )
}