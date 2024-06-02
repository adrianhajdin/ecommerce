import * as XLSX from 'xlsx' // Import for working with Excel files

import { Pill } from 'payload/components' // Assuming Pill component is from payload/components
import React from 'react'

const ExportButton = ({ data }) => {
  console.log(data); // Log data for debugging or inspection

  const handleClick = () => {
    const worksheet = XLSX.utils.json_to_sheet(data.docs);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'Data_Export.xlsx');
  }

  return (
    <Pill pillStyle="light" onClick={handleClick}>
      Export
    </Pill>
  )
}

export default ExportButton