import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignUp() {


  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignIn() {
    navigation.navigate("singin");
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}> 
    <VStack flex={1} px={6}>
      <Image
        source={BackgroundImg}
        defaultSource={BackgroundImg} //imagem de fundo carrega mais rápido pois é padrão
        alt="Background"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={{ base: "10", md: "24" }}>
        <LogoSvg />
        <Text color="gray.50" fontSize={{ base: "xs", md: "sm" }}>
          A Treine sua mente e seu corpo
        </Text>
      </Center>
      <Center>
        <Heading
          color="gray.100"
          fontSize={{ base: "sm", md: "lg", xl: "lg" }}
          mb="6"
          fontFamily="heading"
        >
          Crie a sua conta
        </Heading>

        <Input placeholder="Nome" />
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />
        <Input placeholder="Confirmar senha" secureTextEntry />
        <Button title="Criar e acessar" />
      </Center>

      <Center mt={{base: 12, md: 24}}>
        <Button
          title="Voltar para login"
          variant="outline" 
          onPress={handleSignIn}
          />
      </Center>
    </VStack>
</ScrollView>
  );
}
