
import Head from "next/head";
import NavBar from '../components/navBar';

import './global.scss';
import { ThemeProvider } from 'next-themes';

export default function MyApp({Component, pageProps})
{
	return <ThemeProvider attribute="class">
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="Программирование контроллеров, HMI, SCADA и MES систем." />
			<meta name="keywords" content="программирование, контроллер, Siemens, АСУ ТП, SCADA, MES" />
			<title>АСУ ТП и MES. Системы автоматизации. Программирование контроллеров. SCADA система. Программируемый контроллер. Инженеры АСУ ТП. Контроллер Siemens.</title>
		</Head>
		<NavBar/>
		<Component {...pageProps} />
	</ThemeProvider>
}
