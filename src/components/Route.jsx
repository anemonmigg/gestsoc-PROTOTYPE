import { Stack, Text, Title } from "@mantine/core"

function Route() {
  return (
    <Stack
      gap='xs'
      justify="flex-start"
    >
      <Title order={3}>SM Mall of Asia</Title>
      <Text>Estimated time: 1:30</Text>
      <Text>Estimated cost: 150Php</Text>
      <Title order={5}>Directions</Title>
    </Stack>
  )
}

export default Route