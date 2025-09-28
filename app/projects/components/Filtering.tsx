"use client"


import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { SearchParams } from "../../../types/route";


interface FilteringProps {
  years: number[];
  locations: string[];
}


const Filtering = ({years, locations}: FilteringProps) => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;

    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value)

    router.push(pathname + "?" + params.toString());
  }

  return <div className=" flex gap-4 mb-8">
    <select name="year" className="shadow-sm hover:scale-101 shadow-gray-300 rounded-md px-4 py-2" onChange={handleChange} defaultValue={searchParams.get(SearchParams.YEAR) as string}>
      <option value="">Filter by Year</option>
      {years.map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>

    <select name="location" className="shadow-sm hover:scale-101 shadow-gray-300 rounded-md px-4 py-2" onChange={handleChange} defaultValue={searchParams.get(SearchParams.LOCATION) as string}>
      <option value="">Filter by Location</option>
      {locations.map((location) => (
        <option key={location} value={location}>{location}</option>
      ))}
    </select>
  </div>
}

export default Filtering;