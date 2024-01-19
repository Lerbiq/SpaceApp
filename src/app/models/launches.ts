export interface Launches {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  id:                                 string;
  url:                                string;
  slug:                               string;
  name:                               string;
  status:                             Status;
  last_updated:                       string;
  net:                                string;
  window_end:                         string;
  window_start:                       string;
  net_precision:                      Status | null;
  probability:                        number | null;
  weather_concerns:                   null | string;
  holdreason:                         string;
  failreason:                         string;
  hashtag:                            null | string;
  launch_service_provider:            LaunchServiceProvider;
  rocket:                             Rocket;
  mission:                            Mission;
  pad:                                Pad;
  webcast_live:                       boolean;
  image:                              null | string;
  infographic:                        null;
  program:                            Program[];
  orbital_launch_attempt_count:       number | null;
  location_launch_attempt_count:      number;
  pad_launch_attempt_count:           number;
  agency_launch_attempt_count:        number;
  orbital_launch_attempt_count_year:  number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year:      number;
  agency_launch_attempt_count_year:   number;
  type:                               ResultType;
}

export interface LaunchServiceProvider {
  id:   number;
  url:  string;
  name: string;
  type: LaunchServiceProviderType | null;
}

export enum LaunchServiceProviderType {
  Commercial = "Commercial",
  Goverment = "Goverment",
  Government = "Government",
  Multinational = "Multinational",
  Private = "Private",
}

export interface Mission {
  id:                number;
  name:              string;
  description:       string;
  launch_designator: null;
  type:              string;
  orbit:             Status;
  agencies:          Agency[];
  info_urls:         any[];
  vid_urls:          any[];
}

export interface Agency {
  id:                              number;
  url:                             string;
  name:                            string;
  featured:                        boolean;
  type:                            LaunchServiceProviderType;
  country_code:                    string;
  abbrev:                          string;
  description:                     string;
  administrator:                   null | string;
  founding_year:                   string;
  launchers:                       string;
  spacecraft:                      string;
  launch_library_url:              string;
  total_launch_count:              number;
  consecutive_successful_launches: number;
  successful_launches:             number;
  failed_launches:                 number;
  pending_launches:                number;
  consecutive_successful_landings: number;
  successful_landings:             number;
  failed_landings:                 number;
  attempted_landings:              number;
  info_url:                        null | string;
  wiki_url:                        string;
  logo_url:                        string;
  image_url:                       null | string;
  nation_url:                      null | string;
}

export interface Status {
  id:           number;
  name:         StatusName;
  abbrev:       string;
  description?: string;
}

export enum StatusName {
  GeostationaryOrbit = "Geostationary Orbit",
  GeostationaryTransferOrbit = "Geostationary Transfer Orbit",
  HeliocentricNA = "Heliocentric N/A",
  LaunchFailure = "Launch Failure",
  LaunchSuccessful = "Launch Successful",
  LowEarthOrbit = "Low Earth Orbit",
  LunarOrbit = "Lunar Orbit",
  MediumEarthOrbit = "Medium Earth Orbit",
  Minute = "Minute",
  PolarOrbit = "Polar Orbit",
  Second = "Second",
  Suborbital = "Suborbital",
  SunEarthL2 = "Sun-Earth L2",
  SunSynchronousOrbit = "Sun-Synchronous Orbit",
}

export interface Pad {
  id:                           number;
  url:                          string;
  agency_id:                    number | null;
  name:                         string;
  description:                  null;
  info_url:                     null | string;
  wiki_url:                     null | string;
  map_url:                      string;
  latitude:                     string;
  longitude:                    string;
  location:                     Location;
  country_code:                 string;
  map_image:                    string;
  total_launch_count:           number;
  orbital_launch_attempt_count: number;
}

export interface Location {
  id:                  number;
  url:                 string;
  name:                string;
  country_code:        string;
  description:         null | string;
  map_image:           string;
  timezone_name:       string;
  total_launch_count:  number;
  total_landing_count: number;
}

export interface Program {
  id:              number;
  url:             string;
  name:            string;
  description:     string;
  agencies:        LaunchServiceProvider[];
  image_url:       string;
  start_date:      string;
  end_date:        null;
  info_url:        null | string;
  wiki_url:        string;
  mission_patches: MissionPatch[];
  type:            TypeClass;
}

export interface MissionPatch {
  id:        number;
  name:      string;
  priority:  number;
  image_url: string;
  agency:    LaunchServiceProvider;
}

export interface TypeClass {
  id:   number;
  name: TypeName;
}

export enum TypeName {
  CommunicationConstellation = "Communication Constellation",
  HumanSpaceflight = "Human Spaceflight",
  NavigationConstellation = "Navigation Constellation",
  Technology = "Technology",
}

export interface Rocket {
  id:            number;
  configuration: Configuration;
}

export interface Configuration {
  id:        number;
  url:       string;
  name:      string;
  family:    string;
  full_name: string;
  variant:   string;
}

export enum ResultType {
  Normal = "normal",
}
