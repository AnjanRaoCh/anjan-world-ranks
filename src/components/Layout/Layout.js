import { Brightness6Rounded } from "@material-ui/icons";
import Head from "next/head";
import Link  from "next/link";
import { useState } from "react";
import styles from './Layout.module.css';

const Layout = ({ children, title = "World Ranks" }) => {
    const [theme,setTheme] = useState('light')
    const SwitchTheme= () => {
        if(theme==='light') {
            setTheme('dark');
            document.documentElement.setAttribute('data-theme','dark');
        }
        else {
            setTheme('light');
            document.documentElement.setAttribute('data-theme','light');
        }
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Meta description content goes here." />
                <meta property="og:title" content="My page title" key="title" />
                <meta property="og:description" content="My page title" key="title" />
            </Head>
            <div>
            <header className={styles.header}>
                <Link href="/"  >Anjan</Link> 
                <button className={styles.themeSwicher} onClick={SwitchTheme}>  
                    <Brightness6Rounded></Brightness6Rounded>
                </button>
            </header>
            </div>
            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                Anjan @ AxlrData
        </footer>
        </div>
    )
}
export default Layout;