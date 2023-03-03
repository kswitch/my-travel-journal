import worldIcon from './../images/icons/world-icon.png'

export default function Header() {
    return (
        <header>
            <img className="header-icon" src={worldIcon} alt="World Icon" />
            <p className="header-text">my travel journal.</p>
        </header>
    )
}