import Heading from '@/features/ui/Heading';
import SidebarTab from '@/features/ui/SidebarTab';
import PersonalnformationPanel from './PersonalnformationPanel';
import Logout from '@/features/ui/Logout';
import UpdatePasswodPanel from './UpdatePasswodPanel';

const tabs = [
  {
    id: 'personal',
    name: 'Información personal',
    content: <PersonalnformationPanel />,
  },
  {
    id: 'security',
    name: 'Seguridad',
    content: <UpdatePasswodPanel />,
  },
];

function UpdateProfileSidebar() {
  return (
    <SidebarTab
      tabs={tabs}
      header={<Heading type="h2">Configuración de la cuenta</Heading>}
      footer={<Logout/>}
    />

  );
}

export default UpdateProfileSidebar;
