import { FC } from "react";

// types
import { IFunnelName } from "./Funnel.types";

// styles
import {
  FunnelStyled,
  Line,
  Title,
  LineValue,
  FunnelItem,
  FunnelStart,
  FunnelEnd,
  Value,
  Circle,
} from "./Funnel.styles";

export const Funnel: FC<IFunnelName> = (props: IFunnelName) => {
  return (
    <FunnelStyled {...props}>
      <Title>Воронка посещений за {props.title} по первой линии</Title>

      <FunnelItem>
        <FunnelStart>
          <Line width={100} color="#1D46BA">
            <LineValue>{props.name?.fl_overall}</LineValue>
          </Line>
        </FunnelStart>
        <FunnelEnd>
          <Circle color="#1D46BA" />
          <Value>Перешли на Вашу страницу, общее количество</Value>
        </FunnelEnd>
      </FunnelItem>

      {props.name?.fl_in_fis?.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_in_fis?.percent}
              color="#2C60F5"
            >
              <LineValue>
                {props.name?.fl_in_fis.count}/
                {Math.round(props.name?.fl_in_fis.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#2C60F5" />
            <Value>Зарегистрировались в системе</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_from_system.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_from_system.percent}
              color="#6028FF"
            >
              <LineValue>
                {props.name?.fl_from_system.count}/
                {Math.round(props.name?.fl_from_system.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#6028FF" />
            <Value>Перешли от системы</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_from_url.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_from_url.percent}
              color="#962BEA"
            >
              <LineValue>
                {props.name?.fl_from_url.count}/
                {Math.round(props.name?.fl_from_url.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#962BEA" />
            <Value>Перешел по личной ссылке</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_in_hazna.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_in_hazna.percent}
              color="#6E20AC"
            >
              <LineValue>
                {props.name?.fl_in_hazna.count}/
                {Math.round(props.name?.fl_in_hazna.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#6E20AC" />
            <Value>Зарегистрировались в компании</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_in_business.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_in_business.percent}
              color="#5398AB"
            >
              <LineValue>
                {props.name?.fl_in_business.count}/
                {Math.round(props.name?.fl_in_business.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#5398AB" />
            <Value>Начали бизнес в компании</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_in_homework.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_in_homework.percent}
              color="#5D96CF"
            >
              <LineValue>
                {props.name?.fl_in_homework.count}/
                {Math.round(props.name?.fl_in_homework.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#5D96CF" />
            <Value>Выполнили домашнее задание</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_in_education.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_in_education.percent}
              color="#3B73AA"
            >
              <LineValue>
                {props.name?.fl_in_education.count}/
                {Math.round(props.name?.fl_in_education.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#3B73AA" />
            <Value>Прошли обучение</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_in_webinar.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_in_webinar.percent}
              color="#373E45"
            >
              <LineValue>
                {props.name?.fl_in_webinar.count}/
                {Math.round(props.name?.fl_in_webinar.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#373E45" />
            <Value>Посетили вебинар</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_candidate.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_candidate.percent}
              color="#2C3A72"
            >
              <LineValue>
                {props.name?.fl_candidate.count}/
                {Math.round(props.name?.fl_candidate.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#2C3A72" />
            <Value>Кандидат</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_partner.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_partner.percent}
              color="#232D55"
            >
              <LineValue>
                {props.name?.fl_partner.count}/
                {Math.round(props.name?.fl_partner.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#232D55" />
            <Value>Партнер</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_partner_11.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_partner_11.percent}
              color="#038BFF"
            >
              <LineValue>
                {props.name?.fl_partner_11.count}/
                {Math.round(props.name?.fl_partner_11.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#038BFF" />
            <Value>Партнер 1+1</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_partner_master.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_partner_master.percent}
              color="#4053DA"
            >
              <LineValue>
                {props.name?.fl_partner_master.count}/
                {Math.round(props.name?.fl_partner_master.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#4053DA" />
            <Value>Партнер-наставник</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_junior.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_junior.percent}
              color="#5080FD"
            >
              <LineValue>
                {props.name?.fl_junior.count}/
                {Math.round(props.name?.fl_junior.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#5080FD" />
            <Value>Юниор</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_master.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_master.percent}
              color="#5080FD"
            >
              <LineValue>
                {props.name?.fl_master.count}/
                {Math.round(props.name?.fl_master.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#4C779F" />
            <Value>Мастер</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_manager.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_manager.percent}
              color="#364C79"
            >
              <LineValue>
                {props.name?.fl_manager.count}/
                {Math.round(props.name?.fl_manager.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#364C79" />
            <Value>Менеджер</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_director.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_director.percent}
              color="#AB9BFE"
            >
              <LineValue>
                {props.name?.fl_director.count}/
                {Math.round(props.name?.fl_director.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#AB9BFE" />
            <Value>Директор</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_prime.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_prime.percent}
              color="#4170b5"
            >
              <LineValue>
                {props.name?.fl_prime.count}/
                {Math.round(props.name?.fl_prime.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#4170b5" />
            <Value>Премьер</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_regional_director.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_regional_director.percent}
              color="#005CAA"
            >
              <LineValue>
                {props.name?.fl_regional_director.count}/
                {Math.round(props.name?.fl_regional_director.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#005CAA" />
            <Value>Региональный директор</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_national_director.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_national_director.percent}
              color="#C5E2FD"
            >
              <LineValue>
                {props.name?.fl_national_director.count}/
                {Math.round(props.name?.fl_national_director.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#C5E2FD" />
            <Value>Национальный директор</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_international_director.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_international_director.percent}
              color="#E1BCFF"
            >
              <LineValue>
                {props.name?.fl_international_director.count}/
                {Math.round(props.name?.fl_international_director.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#E1BCFF" />
            <Value>Интернациональный директор</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_ambassador.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_ambassador.percent}
              color="#6b4cc2"
            >
              <LineValue>
                {props.name?.fl_ambassador.count}/
                {Math.round(props.name?.fl_ambassador.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#6b4cc2" />
            <Value>Амбассадор</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}

      {props.name?.fl_president_adviser.percent ? (
        <FunnelItem>
          <FunnelStart>
            <Line
              width={props.name?.fl_president_adviser.percent}
              color="#6ad4cd"
            >
              <LineValue>
                {props.name?.fl_president_adviser.count}/
                {Math.round(props.name?.fl_president_adviser.percent)}%
              </LineValue>
            </Line>
          </FunnelStart>
          <FunnelEnd>
            <Circle color="#6ad4cd" />
            <Value>Советник президента</Value>
          </FunnelEnd>
        </FunnelItem>
      ) : null}
    </FunnelStyled>
  );
};
