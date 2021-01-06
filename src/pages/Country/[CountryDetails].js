import { StylesProvider } from "@material-ui/core";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from './Country.module.css';

const getCountry = async (id) => {
    const result = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
    const country = await result.json();
    return country;

}
const CountryDetails = ({ countryData }) => {
    const [borders, setBorders] = useState([]);
    const getBorders = async () => {
        const borders = await Promise.all(countryData.borders.map(boder => getCountry(boder)));
        setBorders(borders);
    }
    useEffect(() => {
        getBorders();
    }, []);

    console.log(borders, "Borders");
    console.log("CountryData", countryData);
    return <Layout title={countryData.name} >
        <div className={styles.container}>
            <div className={styles.container_left}>
                <div className={styles.overview_panel} >
                    <img src={countryData.flag} alt={countryData.name} />
                    <h1 className={styles.overview_name}>{countryData.name}</h1>
                    <div className={styles.overview_region}> {countryData.region}</div>
                    <div className={styles.overview_numbers}>
                        <div className={styles.overview_papulation}>
                            <div className={styles.overview_value}>{countryData.population}</div>
                            <div className={styles.overview_label}>Papulation</div>
                        </div>
                        <div className={styles.overview_area}>
                            <div className={styles.overview_value}>{countryData.area || 0 }</div>
                            <div className={styles.overview_label}>Area</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container_right}>
                <div className={styles.details_panel}>
                    <h4 className={styles.details_panel_heading}>Details</h4>
                    <div className={styles.details_panel_row} >
                        <div className={styles.details_panel_label}>Capital</div>
                        <div className={styles.details_panel_value}>{countryData.capital}</div>
                    </div>
                    <div className={styles.details_panel_row} >
                        <div className={styles.details_panel_label}>SubRegion</div>
                        <div className={styles.details_panel_value}>{countryData.subregion}</div>
                    </div>
                    <div className={styles.details_panel_row} >
                        <div className={styles.details_panel_label}>Language</div>
                        <div className={styles.details_panel_value}>{countryData.languages.map(({ name }) => name).join(", ")}</div>
                    </div>
                    <div className={styles.details_panel_row} >
                        <div className={styles.details_panel_label}>Currency</div>
                        <div className={styles.details_panel_value}>{countryData.currencies.map(({ name }) => name).join(", ")}</div>
                    </div>
                    <div className={styles.details_panel_row} >
                        <div className={styles.details_panel_label}>Native Name</div>
                        <div className={styles.details_panel_value}>{countryData.nativeName}</div>
                    </div>
                    <div className={styles.details_panel_row} >
                        <div className={styles.details_panel_label}>Gini</div>
                        <div className={styles.details_panel_value}>{countryData.gini || 0} %</div>
                    </div>
                    <div className={styles.details_panel_borders}>
                        <div className={styles.details_panel_border_label}>Naighbouring Countries</div>
                        <div className={styles.details_panel_borders_container}>
                            {borders.map(({ flag, name,index }) => (
                                <div key={index} className={styles.details_panel_border_country}>
                                    <img src={flag} alt={name}></img>
                                    <div className={styles.details_panel_border_name}>{name}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </Layout>
}
export default CountryDetails;
// WhenEver We go to the Page, if we need to get the data in the server before render it
export const getServerSideProps = async ({ params }) => {
    // Below Console will print in the terminal
    console.log("Params", params);
    // const result = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.CountryDetails}`);
    // const countryData = await result.json();
    const countryData = await getCountry(params.CountryDetails)
    return {
        props: {
            countryData,
        },
    };
};