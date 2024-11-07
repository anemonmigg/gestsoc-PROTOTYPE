import { TextInput, Stack, ScrollArea, Container } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import Route from "../components/Route.jsx"

function FindRoutes() {
  const searchIcon = <IconSearch size={24}/>

  return (
    <Stack
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="flex-start"
      gap="md"
      style={{height: 700}}
    >
      <TextInput
        size="lg"
        radius="xl"
        placeholder="Location"
        leftSection={searchIcon}
        pointer
      />
      <ScrollArea style={{flex: 1}}>
        <Container size='lg'>
          <Route/>
        </Container>
      </ScrollArea>
    </Stack>
  )
}

export default FindRoutes