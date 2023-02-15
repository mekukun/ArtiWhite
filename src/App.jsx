import {
  Button,
  Wrap,
  Input,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";

const App = () => (
  <Container>
    <Heading>ArtiWhite 🤳</Heading>
    <Text>
      unleash your creativity and express yourself in exciting new ways, all
      without needing any artistic or design skills. Simply input your text, and
      our AI model will generate an image that perfectly captures the essence of
      your words.
    </Text>
    <Wrap>
      <Input w="350px"></Input>
      <Button>Submit</Button>
    </Wrap>
  </Container>
);

export default App;
