import { FiHome, FiTrendingUp, FiCompass } from "react-icons/fi";
import { IconType } from "react-icons";

interface LinkItemProps {
  name: string;
  href: string;
  icon: IconType;
}

export const MenuItems: Array<LinkItemProps> = [
  { name: "Inicio", href: "/", icon: FiHome },
  { name: "Agendamento", href: "/agendamento", icon: FiTrendingUp },
  { name: "Consulta", href: "/consulta", icon: FiCompass },
];
