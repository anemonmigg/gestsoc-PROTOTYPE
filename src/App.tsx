import '@mantine/core/styles.css';

import { AppShell, Burger } from '@mantine/core';
import { IconTrain } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavLink } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router-dom';
function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >

      <AppShell.Header style={{display: 'flex', alignItems: 'center'}}>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div style={{display: 'flex', alignItems: 'center', marginLeft: '1rem'}}>
          <IconTrain 
            stroke={2}
            size={32}
            color='var(--mantine-color-blue-filled)' 
          />
          <h2 style={{marginLeft: '0.5rem'}}>PROTOTYPE</h2>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section>
          <NavLink
            label='Feed'
            component={RouterNavLink}
            to={'/'}
          />
          <NavLink
            label='Saved Routes'
            component={RouterNavLink}
            to={'/user-routes'}
          />
          <NavLink
            label='Find Routes'
            component={RouterNavLink}
            to={'/find-routes'}
          />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>

      </AppShell>
    </MantineProvider>
  )
}

export default App