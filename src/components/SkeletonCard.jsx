import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const SkeletonCard = ({ count }) => {
  return (
    <SkeletonTheme highlightColor='#e0e0e0'>
      {new Array(count).fill().map((i, idx) => {
        return (
          <section key={idx}>
            <h2 className='section-title'>
              <Skeleton height={180} width={700} />
              <p className='card-title'>
                <Skeleton height={36} />
              </p>
              <p className='card-title'>
                <Skeleton height={72} />
              </p>
            </h2>
          </section>
        );
      })}
    </SkeletonTheme>
  );
};
export default SkeletonCard;
