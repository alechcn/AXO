export function Table({ children }) { return <table className='min-w-full border-collapse border'>{children}</table>; }
export function TableHeader({ children }) { return <thead className='bg-gray-100'>{children}</thead>; }
export function TableRow({ children }) { return <tr className='border-b'>{children}</tr>; }
export function TableCell({ children }) { return <td className='px-4 py-2 border'>{children}</td>; }
export function TableBody({ children }) { return <tbody>{children}</tbody>; }