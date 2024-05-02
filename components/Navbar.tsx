import Image from "next/image";

export default () => {
    return (
        <div className="navbar">
        <div className="nav_header">
            <Image src="/logo.svg" width={188} height={22} alt={"Logo"}/>
        </div>
        <div className="navs">
            <div className="nav active">
                <div className="nav-image">
                    <Image src="/document.svg" alt={"Document Icon"} width={20} height={20}/>
                </div>

                <a className="nav-text" href={"/"}>
                    Отчеты
                </a>
            </div>
        </div>
    </div>
)
}