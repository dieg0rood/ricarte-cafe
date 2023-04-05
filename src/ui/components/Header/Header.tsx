import Logo from "./Menu/Logo";
import NavLink from "./Menu/NavLink";
import { useRouter } from 'next/router'

export default function Header() {
    const { asPath, pathname } = useRouter();
    const classLogo = asPath === '/' ? "" : "smaller-logo"
    const pathLogo = asPath === '/' ? "/images/logo3.png" : "/images/logo2.png"

    return (
        <header>
            <div className={ asPath === '/' ? "header-container home-style" : "header-container page-style" }>
                <div className="row">
                    <div className="col-4">
                        <nav className="nav-class">
                            <NavLink NamePage="Quem Somos" LinkRedirect="/quem-somos" />
                            <NavLink NamePage="Cardápio" LinkRedirect="/cardapio" />
                        </nav>
                    </div>
                    <div className="col-4">
                        <div className="logo-container">
                            
                            <Logo ClassLogo={classLogo} Path={pathLogo} String="Ricarte Caffe" />
                        </div>
                    </div>
                    <div className="col-4">
                        <nav className="nav-class">
                            <NavLink NamePage="Planos" LinkRedirect="/planos" />
                            <NavLink NamePage="Contato" LinkRedirect="/contato" />
                        </nav>
                    </div>
                </div>
            </div>
        </header >
    );
}