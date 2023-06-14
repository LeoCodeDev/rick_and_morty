import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";

const Detail = ({ selectedCharacter }) => {
  const {
    name,
    // id,
    status,
    species,
    type,
    gender,
    image,
    origin,
    location,
    episode,
  } = selectedCharacter;

  const [episodes, setEpisodes] = useState([]);

  React.useEffect(() => {
    const getEpisodes = async () => {
      const episodePromises = episode.map((ep) =>
        axios(ep).then(({ data }) => data.name)
      );

      try {
        const episodes = await Promise.all(episodePromises);
        setEpisodes(episodes);
      } catch (error) {
        console.error(error);
      }
    };

    getEpisodes();
  }, [episode]);

  const [characterOrigin, setCharacterOrigin] = useState({});

  useEffect(() => {
    if (origin.url) {
      const getOrigin = () =>
        axios(origin.url).then(({ data }) => setCharacterOrigin(data));

      getOrigin();
    }
  }, [origin.url]);

  const [characterLocation, setCharacterLocation] = useState({});

  useEffect(() => {
    if (location.url) {
      const getLocation = () =>
        axios(location.url).then(({ data }) => setCharacterLocation(data));

      getLocation();
    }
  }, [location.url]);

  return (
    <section className={styles.detailContainer}>
      <h1 className={styles.detailTitle}>{name}</h1>
      <figure className={styles.detailImage}>
        <img src={image} alt={name} />
      </figure>
      <article className={styles.detailInfo}>
        <h2>Basic Info</h2>
        <ul className={styles.list}>
          <li>
            <span className={styles.label}>Name: </span>
            <span className={styles.value}>{status}</span>
            </li>
          <li>
            <span className={styles.label}>Species: </span>
            <span className={styles.value}>{species}</span>
            </li>
          <li>
            <span className={styles.label}>Type: </span>
            <span className={styles.value}>{type || '???'}</span>
            </li>
          <li>
            <span className={styles.label}>Gender: </span>
            <span className={styles.value}>{gender}</span>
            </li>
          <li>
            <span className={styles.label}>Location: </span>
            <span className={styles.value}>{characterLocation.name || '???'}</span>
            </li>
          <li>
            <span className={styles.label}>Origin: </span>
            <span className={styles.value}>{characterOrigin.name || '???'}</span>
            </li>
        </ul>
      </article>
      <article className={styles.detailInfo}>
        <h2>Origin</h2>
        <ul className={styles.list}>
          <li>
            <span className={styles.label}>Type: </span>
            <span className={styles.value}>{characterOrigin.type || '???'}</span>
            </li>
          <li>
            <span className={styles.label}>Name: </span>
            <span className={styles.value}>{characterOrigin.name || '???'}</span>
            </li>
          <li>
            <span className={styles.label}>Dimension: </span>
            <span className={styles.value}>{characterOrigin.dimension || '???'}</span>
            </li>
          <li>
            <span className={styles.label}>Population: </span>
            <span className={styles.value}>{characterOrigin?.residents?.length || '???'}</span>
            </li>
        </ul>
      </article>
      <article className={styles.detailInfo}>
        <h2>Location</h2>
        <ul className={styles.list}>
          <li>
            <span className={styles.label}>Type: </span>
            <span className={styles.value}>{characterLocation.type}</span>
            </li>
          <li>
            <span className={styles.label}>Name: </span>
            <span className={styles.value}>{characterLocation.name}</span>
            </li>
          <li>
            <span className={styles.label}>Dimension: </span>
            <span className={styles.value}>{characterLocation.dimension}</span>
            </li>
          <li>
            <span className={styles.label}>Population: </span>
            <span className={styles.value}>{characterLocation?.residents?.length}</span>
            </li>
        </ul>
      </article>
      <article className={styles.detailInfo}>
        <h2>Episodes: {episode?.length}</h2>
        <ul className={styles.episodeList}>
          {episodes.map((ep) => (
            <li key={ep}>{ep}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export { Detail };
