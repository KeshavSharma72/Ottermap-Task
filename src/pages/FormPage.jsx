import InputField from "../components/InputField"
import SearchBar from "../components/SearchBar"

export default function() {
    return(
        <div className="form-page-container">
            <h1>Search and Enter Your Details</h1>
            <SearchBar />
            <InputField />
        </div>
    )
}