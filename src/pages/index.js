import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import SearchInput from '../components/SearchInput/SearchInput';
import CountriesTable from '../components/CountriesTable/CountriesTable';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home({ countries }) {
  console.log("Countries", countries);
  const [keyword, setkeyword] = useState("");
  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(keyword) || country.region.toLowerCase().includes(keyword) || country.subregion.toLowerCase().includes(keyword));

  const onInputChange = (e) => {

    e.preventDefault();
    console.log("EventValue", e.target.value);
    setkeyword(e.target.value.toLowerCase())
  }
  return <Layout>
    <div className={styles.inputContainer}>
      <div className={styles.counts}>
        Found {countries.length} Countries.
    </div>
      <div className={styles.input} >
        <SearchInput placeholder="Filter by Name, Region or SubRegion" onChange={onInputChange} ></SearchInput>
      </div>

    </div>
    <CountriesTable countries={filteredCountries}></CountriesTable>
  </Layout>
}
// When We Fetch data at build time, Need to use  getStaticProps Method
export const getStaticProps = async () => {
  const result = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await result.json();
  return {
    props: {
      countries,
    },
  };
};
