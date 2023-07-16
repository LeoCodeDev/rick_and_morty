import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { Back } from "../Back/Back";

const Detail = ({ selectedCharacter }) => {
  const {
    name,
    id,
    status,
    species,
    type,
    gender,
    image,
    origin,
    originUrl,
    location,
    locationUrl,
    episode,
  } = selectedCharacter;

  // const URL = 'http://localhost:3001/rickandmorty/location'

  useEffect(()=>{
    if((originUrl && locationUrl) && originUrl !== locationUrl){

      const options = {
        method: 'POST',
        url: 'http://localhost:3001/rickandmorty/location',
        headers: {'Content-Type': 'application/json'},
        data: {
          url1: 'https://rickandmortyapi.com/api/location/3',
          url2: 'https://rickandmortyapi.com/api/location/2'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
  },[originUrl,locationUrl])
  

  return (
    <>
      <Back isColor="blue" />
      <section className={styles.detailContainer}>
        <h1 className={styles.detailTitle}>{name}</h1>
        <figure className={styles.detailImage}>
          <img src={image} alt={name} />
        </figure>
        <article className={styles.detailInfo}>
          <h2>Basic Info</h2>
          <ul className={styles.list}>
            <li>
              <span className={styles.label}>Status: </span>
              <span className={styles.value}>{status}</span>
            </li>
            <li>
              <span className={styles.label}>Species: </span>
              <span className={styles.value}>{species}</span>
            </li>
            <li>
              <span className={styles.label}>Type: </span>
              <span className={styles.value}>{type || "???"}</span>
            </li>
            <li>
              <span className={styles.label}>Gender: </span>
              <span className={styles.value}>{gender}</span>
            </li>
            <li>
              <span className={styles.label}>Location: </span>
              <span className={styles.value}>
                {location || "???"}
              </span>
            </li>
            <li>
              <span className={styles.label}>Origin: </span>
              <span className={styles.value}>
                {origin|| "???"}
              </span>
            </li>
          </ul>
        </article>
        <article className={styles.detailInfo}>
          <h2>Origin</h2>
          <ul className={styles.list}>
            <li>
              <span className={styles.label}>Type: </span>
              <span className={styles.value}>
                {0 || "???"}
              </span>
            </li>
            <li>
              <span className={styles.label}>Name: </span>
              <span className={styles.value}>
                {origin || "???"}
              </span>
            </li>
            <li>
              <span className={styles.label}>Dimension: </span>
              <span className={styles.value}>
                {0 || "???"}
              </span>
            </li>
            <li>
              <span className={styles.label}>Population: </span>
              <span className={styles.value}>
                {0 || "???"}
              </span>
            </li>
          </ul>
        </article>
        <article className={styles.detailInfo}>
          <h2>Location</h2>
          <ul className={styles.list}>
            <li>
              <span className={styles.label}>Type: </span>
              <span className={styles.value}>{0}</span>
            </li>
            <li>
              <span className={styles.label}>Name: </span>
              <span className={styles.value}>{location}</span>
            </li>
            <li>
              <span className={styles.label}>Dimension: </span>
              <span className={styles.value}>
                {0}
              </span>
            </li>
            <li>
              <span className={styles.label}>Population: </span>
              <span className={styles.value}>
                {0}
              </span>
            </li>
          </ul>
        </article>
        <article className={styles.detailInfo}>
          <h2>Episodes: {episode?.length}</h2>
          <ul className={styles.episodeList}>
            {episode.map((ep) => (
              <li key={ep}>{ep}</li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export { Detail };
