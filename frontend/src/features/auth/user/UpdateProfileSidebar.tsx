import Heading from '@/features/ui/Heading';
import SidebarMenu from '@/features/ui/SidebarMenu';
import { HiLogout } from 'react-icons/hi';
import PersonalnformationPanel from './PersonalnformationPanel';
import Tabs from '@/features/ui/Tabs';

const tabs = [
  {
    id: 'personal',
    name: 'Información personal',
    children: <PersonalnformationPanel/>,
  },
  {
    id: 'security',
    name: 'Seguridad',
  },
];

function UpdateProfileSidebar() {

  return (
    <SidebarMenu>
      <Heading type="h2">Configuración de la cuenta</Heading>
      <Tabs>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.id} id={tab.id} name={tab.name} />
        ))}
        {tabs.map((tab) => (
          <Tabs.Panel key={tab.id} id={tab.id}>
            {tab.children}
          </Tabs.Panel>
        ))}
      </Tabs>
      <footer>
        <div className="flex items-center gap-5 cursor-pointer">
          <HiLogout size={20} />
          <span>Cerrar sesión</span>
        </div>
      </footer>
    </SidebarMenu>
  );
}

export default UpdateProfileSidebar;
