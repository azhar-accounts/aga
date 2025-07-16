export default function Label({ children }) {
    return (
        <button className="bg-green-100 text-green-700 text-sm px-6 py-2 rounded-full hover:bg-green-200 transition-all">
            {children}
        </button>
    );
}
