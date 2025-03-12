import { HomeData } from "@/types";
import Card from "./shared/Card";

const DetailsSectionCard = async ({home_data}: {home_data: HomeData}) => {
    return (
        <>
        <div className="dis-flex-col md:dis-flex-row justify-center gap-y-10 md:gap-x-10">
            <Card>
              <h3 className="mb-5">{home_data.card_1_title}</h3>
              <p>
              {home_data.card_1_description}
              </p>
            </Card>
            <Card>
              <h3 className="mb-5">{home_data.card_2_title}</h3>
              <p>
                {home_data.card_2_description}
              </p>
            </Card>
          </div>

          <div className="dis-flex-col md:dis-flex-row justify-center gap-y-10 md:gap-x-10">
            <Card>
              <h3 className="mb-5">{home_data.card_3_title}</h3>
              <p>
                {home_data.card_3_description}
              </p>
            </Card>
            <Card>
              <h3 className="mb-5">{home_data.card_4_title}</h3>
              <p>
                {home_data.card_4_description}
              </p>
            </Card>
          </div>
          <div className="flex justify-center">
            <Card>
              <h3 className="!font-bold mb-5">{home_data.card_5_title}</h3>
              <p>
                {home_data.card_5_description}
              </p>
            </Card>
          </div>
        </>
    )
}

export default DetailsSectionCard;