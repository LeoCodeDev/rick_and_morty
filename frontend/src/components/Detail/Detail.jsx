import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { Back } from "../Back/Back";

const Detail = ({ selectedCharacter }) => {
  const {
    name,
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

  const [originData, setOriginData] = useState({});
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    let url1 = null
    let url2 = null

    if (originUrl && locationUrl) {
      url1 = originUrl;
      url2 = locationUrl;
    } else if (originUrl || locationUrl) {
      originUrl && (url1 = originUrl);
      locationUrl && (url2 = locationUrl);
    }

    (originUrl || locationUrl) &&
      axios(`/rickandmorty/location?url1=${url1}&url2=${url2}`)
        .then(({ data }) => {
          if (originUrl && locationUrl) {
            setOriginData({
              originDimension: data.originDimension,
              originName: data.originName,
              originResidents: data.originResidents,
              originType: data.originType,
            });
            setLocationData({
              locationDimension: data.locationDimension,
              locationName: data.locationName,
              locationResidents: data.locationResidents,
              locationType: data.locationType,
            });
          } else if (originUrl || locationUrl) {
            if (originUrl) {
              setOriginData({
                originDimension: data.originDimension,
                originName: data.originName,
                originResidents: data.originResidents,
                originType: data.originType,
              });
            } else {
              setLocationData({
                locationDimension: data.locationDimension,
                locationName: data.locationName,
                locationResidents: data.locationResidents,
                locationType: data.locationType,
              });
            }
          }
        })
        .catch(function (error) {
          console.error(error);
        });
  }, [originUrl, locationUrl]);

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
              <span className={styles.value}>{location || "???"}</span>
            </li>
            <li>
              <span className={styles.label}>Origin: </span>
              <span className={styles.value}>{origin || "???"}</span>
            </li>
          </ul>
        </article>
        <article className={styles.detailInfo}>
          <h2>Origin</h2>
          <ul className={styles.list}>
            <li>
              <span className={styles.label}>Type: </span>
              <span className={styles.value}>{originData?.originType || "???"}</span>
            </li>
            <li>
              <span className={styles.label}>Name: </span>
              <span className={styles.value}>{origin || "???"}</span>
            </li>
            <li>
              <span className={styles.label}>Dimension: </span>
              <span className={styles.value}>{originData?.originDimension || "???"}</span>
            </li>
            <li>
              <span className={styles.label}>Population: </span>
              <span className={styles.value}>{originData?.originResidents?.length || "???"}</span>
            </li>
          </ul>
        </article>
        <article className={styles.detailInfo}>
          <h2>Location</h2>
          <ul className={styles.list}>
            <li>
              <span className={styles.label}>Type: </span>
              <span className={styles.value}>{locationData?.locationType || '???'}</span>
            </li>
            <li>
              <span className={styles.label}>Name: </span>
              <span className={styles.value}>{location}</span>
            </li>
            <li>
              <span className={styles.label}>Dimension: </span>
              <span className={styles.value}>{locationData?.locationDimension || '???'}</span>
            </li>
            <li>
              <span className={styles.label}>Population: </span>
              <span className={styles.value}>{locationData?.locationResidents?.length || '???'}</span>
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
