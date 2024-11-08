import { TextInput, Stack, ScrollArea, Container } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import Route from '../components/Route'

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
        <Route/>
      </ScrollArea>
    </Stack>
  )
}

export default FindRoutes