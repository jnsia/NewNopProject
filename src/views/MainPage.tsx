import { useEffect, useState } from "react";
import api from "../apis/randomuser";
import SearchBar from "../components/SearchBar";
import SortOptions from "../components/SortOptions";
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";
import { userData } from "../types/userData";

function Main() {
  const [usersData, setUsersData] = useState<userData[]>([]);
  const [filteredUsersData, setFilteredUsersData] = useState<userData[]>([]);
  const [paginatedUsersData, setPaginatedUsersData] = useState<userData[]>([]);
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  const itemsPerPage = 12;

  useEffect(() => {
    let newUsersData = JSON.parse(JSON.stringify(usersData));

    // 이름 검색에 대한 결과 필터링
    if (searchQuery !== "") {
      newUsersData = usersData.filter((userData) => {
        const username = userData.name;
        const fullusername = username.first + " " + username.last;
        return fullusername.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }

    setFilteredUsersData(newUsersData);

    // 이름에 대한 오름차순, 내림차순 정렬
    if (sortOption === "asc") {
      newUsersData.sort((a: userData, b: userData) => {
        const nameA = (a.name.first + " " + a.name.last).toLowerCase();
        const nameB = (b.name.first + " " + b.name.last).toLowerCase();
        return nameA.localeCompare(nameB);
      });
    } else if (sortOption === "desc") {
      newUsersData.sort((a: userData, b: userData) => {
        const nameA = (a.name.first + " " + a.name.last).toLowerCase();
        const nameB = (b.name.first + " " + b.name.last).toLowerCase();
        return nameB.localeCompare(nameA);
      });
    }

    // 페이지네이션
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setPaginatedUsersData(newUsersData.slice(startIndex, endIndex));
  }, [searchQuery, sortOption, currentPage, usersData]);

  useEffect(() => {
    api.fetchMultipleData(
      500,
      (response: { data: { results: userData[] } }) => {
        const usersData = response.data.results;
        setUsersData(usersData);
        setIsLoading(false)
      },
      (error: randomuserError) => {
        console.log(error);
        setIsError(true);
      }
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-4xl font-bold text-center">Find Your Client</div>
      <div className="flex gap-2 mt-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      {isError ? (
        <div className="bg-red-100 text-red-700 border border-red-300 rounded-md p-4 mx-auto max-w-md text-center">
          데이터를 불러오지 못했어요... <br />
          잠시 후에 다시 시도해주세요!
        </div>
      ) : (
        <div>
          <UserList users={paginatedUsersData} isLoading={isLoading} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredUsersData.length / itemsPerPage)}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}

export default Main;
