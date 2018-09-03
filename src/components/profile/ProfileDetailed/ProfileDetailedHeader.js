import React from "react";
import { Image, Segment, Item, Progress, Button } from "semantic-ui-react";

const src =
  "https://firebasestorage.googleapis.com/v0/b/eventsproj-ce0cf.appspot.com/o/954vMYS2XFTlfMAitiwW0rTtVbv1%2Fuser_images%2Fcjja12c6c00013a5qni179ihn?alt=media&token=3946104c-b1f0-417c-8197-3b359c579ce2";
const ProfileDetailedHeader = ({ profile, AddExperience }) => {
  return (
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image src={src} />

          <Item.Content>
            <Item.Header as="a">{profile.name}</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <p>
                Kung may pa-audition ang GMA for the said role,
                sana ay mag-audition si Arra San Agustin, na para
                sa amin ay deserving mabig­yan ng break dahil bukod sa maganda
                ito ay nakakaarte. In fairness ay kapani-paniwala kung si Arra
                ang pag-aagawan ng DongDen dahil gandara at mestisa
                ang 22-anyos na ‘StarStruck’ girl, na napansin nang gumanap
                bilang Ariana, ang reincarnation ni Sang’gre Amihan (Kylie
                Padilla) sa 2016 remake ng ‘Encantadia’. Isa pang promising
                Kapuso na hindi pa nabibigyan ng break ay ang 17-anyos na Liza
                Soberano-lookalike na si Kate Valdez. 38th birthday ni
                Dingdong nu’ng Agosto 2 at mukhang wala siyang
                ma­laking party, may dinner celebration lang siya with his
                family. Nakita namin sa IGS ni Marian Rivera ‘yung masarap na
                food sa birthday ni Dong, na catered ng Lechon
                Diva na si Dedet dela Fuente ng Pepita’s Kitchen. Yummy!! --
                (Allan Diones)
              </p>
            </Item.Description>
            <Item.Extra>
              {/* <Progress percent={55} color="brown" progress inverted>
                Experience
              </Progress> */}
              <Progress
                size="big"
                progress
                active
                value={profile.experience}
                total={profile.exp_to_level}
                indicating
                label={`${profile.experience}/${profile.exp_to_level}`}
              />
            </Item.Extra>
            <Item.Extra>
              <Button onClick={() => AddExperience(10)} primary>
                Add Exp
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default ProfileDetailedHeader;
