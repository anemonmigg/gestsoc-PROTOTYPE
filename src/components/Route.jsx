import { Timeline, Text, Title, Accordion, Container } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconMap2 , IconTrain , IconWalk, IconGitPullRequest, IconCheck } from '@tabler/icons-react';

function Route() {
  const directions = {
    icon: <IconMap2 />,
    value: 'Directions',
    description: 'Turn left, then right, then upside down.'
  }
  
  return (
    <Container>
      <Title order={3}>SM Mall of Asia</Title>
      <Text>Estimated time: (1hr 30min)</Text>
      <Text>Estimated cost: 150 Php</Text>
      <Accordion>
        <Accordion.Item value={directions.description}>
          <Accordion.Control icon={directions.icon}>{directions.value}</Accordion.Control>
          <Accordion.Panel>
          <Timeline active={2} bulletSize={24} lineWidth={2}>
            <Timeline.Item bullet={<IconTrain size={12} />} title="Take the train from PlaceA to PlaceB">
              <Text c="dimmed" size="sm">Watch your belongings, always be alert.</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<IconWalk size={12} />} title="Walk from PlaceB to PlaceC">
              <Text c="dimmed" size="sm">Gets crowded usually @ 4:30pm</Text>
            </Timeline.Item>

            <Timeline.Item title="Arrive at PlaceC" bullet={<IconCheck size={12} />} lineVariant="dashed">
              <Text c="dimmed" size="sm">You should be in front of PlaceC, near Entrance 1</Text>
            </Timeline.Item>
          </Timeline>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Route;
