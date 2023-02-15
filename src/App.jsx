import {
  Button,
  Stack,
  Input,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";

const App = () => (
  <Container>
    <Heading marginTop="20px">ArtiWhite 🤳</Heading>
    <Text marginTop="20px">
      Unleash your creativity and express yourself in exciting new ways, all
      without needing any artistic or design skills. Simply input your text, and
      our AI model will generate an image that perfectly captures the essence of
      your words.
    </Text>
    <Stack spacing={2} direction="row" marginTop="20px">
      <Input placeholder="Basic usage"></Input>
      <Button>Submit</Button>
    </Stack>
  </Container>
);

export default App;
