import React from 'react';
import Link from 'next/link';
export default function CategoryList ({categories}) {
if (!categories) return null

  return (
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={ `/categories/${category.slug}`}>
        <a>
          <Category {...category} />
          </a>
          </Link>
          </li>
        ))}
      </ul>
  );
}