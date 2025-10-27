import Link from "next/link";

export default function Table() {
  return (
    <table className="table-fixed w-full border-separate border-spacing-y-4 rounded-lg">
      <thead className="bg-neutral-900 rounded-lg">
        <tr className="text-left rounded-lg">
          <th className="py-4 px-4 rounded-tl-lg rounded-bl-lg">Year</th>
          <th className="pr-2 mr-2 py-4 px-4">Project</th>
          <th className="pr-2 py-4 px-4">Built with</th>
          <th className="pr-2 py-4 px-4 rounded-tr-lg rounded-br-lg">Link</th>
        </tr>
      </thead>
      <tbody className="text-start align-top">
        <tr>
          <td className="hidden py-4 px-4 md:block">1961</td>
          <td className="py-4 px-4">Full Stack Web Application</td>
          <td className="py-4 px-4 flex flex-wrap gap-4">
            <p>Next.js</p>
            <p>Express</p>
            <p>Node.js</p>
            <p>MongoDB</p>
          </td>
          <td className="py-4 px-4">
            <Link href="https://netflows.xyz">
              netflows.xyz
            </Link>
          </td>
        </tr>
        <tr>
          <td className="pr-2">Witchy Woman</td>
          <td className="pr-2">The Eagles</td>
          <td className="hidden md:block">1972</td>
        </tr>
        <tr>
          <td className="pr-2">Shining Star</td>
          <td className="pr-2">Earth, Wind, and Fire</td>
          <td className="hidden md:block">1975</td>
        </tr>
      </tbody>
    </table>
  )
}
