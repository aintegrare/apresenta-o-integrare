export default function LatexFooter({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="text-xs text-gray-500 border-t border-gray-200 pt-2 mt-6 flex justify-between">
      <div>Abril de 2025</div>
      <div>{pageNumber}</div>
    </div>
  )
}
