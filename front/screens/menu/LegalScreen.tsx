import React from 'react';
import {
  ColorSchemeName,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {gs} from '../../styles/global';
import {useComposedStyles} from '../../styles/hook';
import {displayName} from '../../app.json';

const cfg = {
  hosting: 'JLG Hosting LLC',
};

export const LegalScreen = () => {
  const {s} = useComposedStyles(gs, styles);
  return (
    <ScrollView>
      <View style={s.container}>
        <Text style={s.h1}>Mentions Légales</Text>

        <Text style={s.p}>Nom de l'application: {displayName}</Text>
        <Text style={s.p}>Editeur: JLG Consulting</Text>
        <Text style={s.p}>
          Adresse: 33 rue de Néant, 77123 TROUPERDU (France)
        </Text>
        <Text style={s.p}>Contact: contact@photobook.com </Text>
        <Text style={s.p}>
          Conception et développement: JLG Consulting, 99 rue de Paris, 77200
          TORCY (France)
        </Text>
        <Text style={s.p}>
          <Text style={s.b}>Hébergement: </Text>
          {cfg.hosting}
        </Text>
        <Text style={s.p}>
          <Text style={s.b}>Conditions d'utilisation: </Text>
          L'utilisation de cette application est soumise aux présentes
          conditions d'utilisation. En téléchargeant et en utilisant cette
          application, vous acceptez ces conditions d'utilisation. Nous nous
          réservons le droit de modifier ces conditions d'utilisation à tout
          moment et sans préavis. Il vous appartient de consulter régulièrement
          les conditions d'utilisation pour vous assurer que vous êtes informé
          de tout changement. Responsabilité: L'éditeur de l'application ne peut
          en aucun cas être tenu responsable des dommages directs ou indirects
          résultant de l'utilisation de cette application. L'utilisateur est
          seul responsable de l'utilisation qu'il en fait.
        </Text>
        <Text style={s.p}>
          <Text style={s.b}>Propriété intellectuelle: </Text>
          Les droits de propriété intellectuelle sur cette application et son
          contenu sont la propriété de l'éditeur de l'application. Toute
          reproduction, distribution, modification, adaptation, extraction ou
          utilisation de cette application ou de son contenu sans autorisation
          préalable de l'éditeur est strictement interdite. Loi applicable: Les
          présentes mentions légales sont soumises à la loi française.
        </Text>
        <Text style={s.p}>
          <Text style={s.b}>Politique de confidentialité: </Text>Notre politique
          de confidentialité décrit les informations que nous collectons,
          comment nous les utilisons et les options qui sont disponibles à nos
          utilisateurs en matière de protection de leurs données personnelles.
          Veuillez consulter notre politique de confidentialité pour plus
          d'informations.
        </Text>
        <Text style={s.p}>
          <Text style={s.b}>Important: </Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          deleniti id, minus maxime at voluptatem nulla laboriosam. Enim, vel
          dolorum recusandae eveniet impedit non animi, voluptatum, minus
          repudiandae architecto inventore.
        </Text>
        <View style={s.footer}>
          <Text style={s.footerText}>@ JLG Consulting - PhotoBook - 2023</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = (cs: ColorSchemeName) => {
  const isDark = cs === 'dark';
  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: isDark ? 'black' : 'white',
      padding: 10,
    },
  });
};
