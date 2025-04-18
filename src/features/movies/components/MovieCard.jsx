import React from "react";
import { Card, Space } from "antd";
export default function MovieCard({ movie, navigate, image, genres }) {
  return (
    // <div
    //   onClick={() => navigate(`/movie/${movie.id}`)}
    //   className="movie-card"
    //   style={{
    //     backgroundImage: `url(${image}${movie.poster_path})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <h1>{movie.title}</h1>
    //   <div className="genres">
    //     {movie.genre_ids && genres ? (
    //       movie.genre_ids.map((genreId) => {
    //         const genre = genres.genres.find((g) => g.id === genreId);
    //         return genre ? <h2 key={genre.id}>{genre.name}</h2> : null;
    //       })
    //     ) : (
    //       <h1>No genres</h1>
    //     )}
    //   </div>
    //   <div className="overview">
    //     <p>{movie.overview}</p>
    //   </div>
    // </div>

    <Card
      onClick={() => navigate(`/movie/${movie.id}`)}
      title={movie.title}
      hoverable
      cover={<img alt={movie.title} src={image + movie.poster_path} />}
    >
      <Space>
        {movie.genre_ids && genres ? (
          movie.genre_ids.map((genreId) => {
            const genre = genres.genres.find((g) => g.id === genreId);
            return genre ? <p key={genre.id}>{genre.name}</p> : null;
          })
        ) : (
          <h1>No genres</h1>
        )}
      </Space>
    </Card>
  );
}
