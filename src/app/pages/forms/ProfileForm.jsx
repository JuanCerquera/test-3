import {
  FormSection,
  FormSubmitButton,
} from "/src/app/components/custom/form/FormComponents";
import {
  FormColorField,
  FormInput,
  RichTextArea,
} from "/src/app/components/custom/form/FormFields";
import FormImage from "/src/app/components/custom/form/FormImage";
import { editInstance } from "/src/app/utilities/submitters";
import useProfile from "/src/app/hooks/useProfile";
import { seekRoute } from "/src/routes/config";
import ValidatedForm from "/src/app/components/custom/form/ValidatedForm";
import { computeActionResponse } from "/src/app/utilities/helpers";
import { ItemContext } from "/src/app/utilities/contexts";

export async function action({request}) {
  const url = new URL(request.url);
  const profileId = url.searchParams.get("id");

  const response = await editInstance({
    request,
    modelName: "company-profiles",
    instanceId: profileId,
  });

  return computeActionResponse(response, "Perfil editado con éxito", "profile");
}

export default function ProfileForm() {
  const profile = useProfile();
  return (
    <ItemContext.Provider value={profile}>
      <ValidatedForm
        method="POST"
        action={seekRoute("profile") + `?id=${profile.id}`}
        encType="multipart/form-data"
      >
        <CompanySection/>
        <CustomizationSection/>
        <SocialMediaSection/>
        <FormSubmitButton/>
      </ValidatedForm>
    </ItemContext.Provider>
  );
}

function CompanySection() {
  const profile = useProfile();
  return (
    <FormSection title={"Datos de la empresa"}>
      <FormInput
        label={"Nombre"}
        name={"name"}
        defaultValue={profile.name}
        required
      />
      <FormInput label={"Slug"} name={"slug"} defaultValue={profile.slug}/>
      <FormInput
        label={"Dirección"}
        name={"address"}
        defaultValue={profile.address}
        required
      />
      <FormInput
        label={"Teléfono"}
        name={"phone"}
        defaultValue={profile.phone}
        required
      />
      <RichTextArea
        label={"Descripción"}
        name={"description"}
        defaultValue={profile.description}
        className="md:col-span-2"
      />
    </FormSection>
  );
}

function CustomizationSection() {
  const profile = useProfile();
  return (
    <FormSection title={"Personalización"}>
      <FormImage name={"profile_picture"} label={"Foto de perfil"}/>
      <FormImage name={"banner_picture"} label={"Foto de banner"}/>
      <div className="md:col-span-2 grid grid-cols-2">
        <FormColorField
          name="color_1"
          label={"Color principal"}
          defaultValue={profile.color_1}
        />
        <FormColorField
          name="color_2"
          label={"Color secundario"}
          defaultValue={profile.color_2}
        />
      </div>
    </FormSection>
  );
}

function SocialMediaSection() {
  const profile = useProfile();
  return (
    <FormSection title={"Redes sociales"}>
      <FormInput
        label={"Link de reseñas"}
        name="reviews_link"
        defaultValue={profile.reviews_link}
      />
      <FormInput
        label={"Facebook"}
        name="social_facebook_url"
        defaultValue={profile.social_facebook_url}
      />
      <FormInput
        label={"Instagram"}
        name="social_instagram_url"
        defaultValue={profile.social_instagram_url}
      />
      <FormInput
        label={"Sitio web"}
        name="social_web_url"
        defaultValue={profile.social_web_url}
      />
    </FormSection>
  );
}
