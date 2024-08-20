import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader() {
  // for loading skeleton
  const numRows = 3;
  const numColumns = 3;

  const dataArray = Array.from({ length: numRows }, (_, rowIndex) =>
    Array.from(
      { length: numColumns },
      (_, columnIndex) => rowIndex * numColumns + columnIndex + 1
    )
  );
  return (
    <>
      {dataArray.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((item, columnIndex) => (
            <div key={columnIndex} className="">
              <Skeleton height={224} />
            </div>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}
