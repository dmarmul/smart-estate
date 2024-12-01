import { AboutUs } from '../components/aboutUs/AboutUs';
import { Neighborhoods } from '../components/neighborhoods/Neighborhoods';
import { Recommendation } from '../components/Recommendation/Recommendation';
import { SearchComponent } from '../components/searchComponent/SearchComponent';

export const HomePage: React.FC = () => {
  return (
    <>
      <SearchComponent />
      <Recommendation />
      <Neighborhoods />
      <AboutUs />
    </>
  );
};
