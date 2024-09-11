import { Image } from 'react-native'
import { Tabs } from 'expo-router'
import { colors } from '@/styles/colors'

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray[900],
          borderTopColor: colors.gray[900],
          height: 56,
          display: [
            'Leads/cadastrar',
            'Leads/detalhes',
            'Eventos/vincular',
            'Eventos/cadastrar',
            'Eventos/detalhes',
            'Eventos/leads',
            'Profile/index',
            'Profile/password',
            'Indicadores/index',
          ].includes(route.name)
            ? 'none'
            : 'flex',
        },
        tabBarLabelStyle: {
          color: colors.white,
          paddingBottom: 10,
          fontFamily: 'SFBold',
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: () => (
            <Image source={require('@/assets/img/home-icon.png')} />
          ),
          tabBarActiveBackgroundColor: colors.blue[900],
        }}
      />
      <Tabs.Screen
        name="Leads/index"
        options={{
          title: 'Leads',
          tabBarIcon: () => (
            <Image source={require('@/assets/img/leads-icon.png')} />
          ),
          tabBarActiveBackgroundColor: colors.blue[900],
        }}
      />
      <Tabs.Screen
        name="Leads/cadastrar"
        options={{
          title: 'Cadastrar Lead',
          tabBarButton: () => null, // Aqui você ainda pode deixar null caso queira remover totalmente
        }}
      />
      <Tabs.Screen
        name="Leads/detalhes"
        options={{
          title: 'Detalhes do Lead',
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Eventos/index"
        options={{
          title: 'Eventos',
          tabBarIcon: () => (
            <Image source={require('@/assets/img/calendar-icon.png')} />
          ),
          tabBarActiveBackgroundColor: colors.blue[900],
        }}
      />
      <Tabs.Screen
        name="Eventos/vincular"
        options={{
          title: 'Vincular Evento',
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Eventos/cadastrar"
        options={{
          title: 'Cadastrar Evento',
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Eventos/detalhes"
        options={{
          title: 'Detalhes do Evento',
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Eventos/leads"
        options={{
          title: 'Leads do Evento',
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Profile/index"
        options={{
          title: 'Perfil',
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Profile/password"
        options={{
          title: 'Alterar Senha',
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Indicadores/index"
        options={{
          title: 'Indicadores',
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  )
}
