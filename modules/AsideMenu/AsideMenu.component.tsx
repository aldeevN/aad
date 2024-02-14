import { Card, Logo } from "./AsideMenu.styles";
import { AsideMenuNav } from "./AsideMenuNav"

export const AsideMenu = () => {
    const navItems = [

        { label: "РАЗДЕЛЫ", href: "/sections" },
        { label: "Тематический кодификатор", href: "/about" },
        { label: "Генератор задач", href: "/task-genirator" },
        { label: "Решение тестовых заданий", href: "/solve-task" }
    ];
    return (
        <Card>
            <Logo>
                <a href="#">Lyrny-L</a>
            </Logo>
            <Logo>
                <a href="#">Главная</a>
            </Logo>
            <AsideMenuNav navLinks={navItems} />
        </Card>

    )
}




