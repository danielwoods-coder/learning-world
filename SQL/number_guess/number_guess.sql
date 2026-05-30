--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)
-- Dumped by pg_dump version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE number_guess;
--
-- Name: number_guess; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE number_guess WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE number_guess OWNER TO freecodecamp;

\connect number_guess

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: user_info; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.user_info (
    user_id integer NOT NULL,
    name character varying(22) NOT NULL,
    played integer,
    best integer
);


ALTER TABLE public.user_info OWNER TO freecodecamp;

--
-- Name: user_info_user_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.user_info_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_info_user_id_seq OWNER TO freecodecamp;

--
-- Name: user_info_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.user_info_user_id_seq OWNED BY public.user_info.user_id;


--
-- Name: user_info user_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.user_info ALTER COLUMN user_id SET DEFAULT nextval('public.user_info_user_id_seq'::regclass);


--
-- Data for Name: user_info; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.user_info VALUES (2, 'user_1780108957525', 0, 0);
INSERT INTO public.user_info VALUES (3, 'user_1780108957524', 0, 0);
INSERT INTO public.user_info VALUES (4, 'tom', 0, 0);
INSERT INTO public.user_info VALUES (5, 'mary', 1, 0);
INSERT INTO public.user_info VALUES (7, 'ikm', 1, 0);
INSERT INTO public.user_info VALUES (8, 'ymesdsji', 1, 0);
INSERT INTO public.user_info VALUES (9, 'kfmfJNhfiui', 1, 2);
INSERT INTO public.user_info VALUES (6, 'asd', 2, 3);
INSERT INTO public.user_info VALUES (11, 'user_1780119120897', 2, 63);
INSERT INTO public.user_info VALUES (10, 'user_1780119120898', 5, 2);
INSERT INTO public.user_info VALUES (13, 'user_1780119203626', 2, 365);
INSERT INTO public.user_info VALUES (12, 'user_1780119203627', 5, 226);
INSERT INTO public.user_info VALUES (14, 'user_1780119858809', 0, 0);
INSERT INTO public.user_info VALUES (15, 'user_1780119858808', 0, 0);
INSERT INTO public.user_info VALUES (16, 'user_1780120059830', 0, 0);
INSERT INTO public.user_info VALUES (17, 'user_1780120059829', 0, 0);
INSERT INTO public.user_info VALUES (18, 'ljjjgrrr', 0, 0);
INSERT INTO public.user_info VALUES (20, 'user_1780121941065', 2, 132);
INSERT INTO public.user_info VALUES (19, 'user_1780121941066', 5, 210);
INSERT INTO public.user_info VALUES (21, 'user_1780122117875', 0, 0);
INSERT INTO public.user_info VALUES (22, 'user_1780122117874', 0, 0);
INSERT INTO public.user_info VALUES (24, 'user_1780122153462', 2, 59);
INSERT INTO public.user_info VALUES (23, 'user_1780122153463', 5, 57);
INSERT INTO public.user_info VALUES (1, 'daniel', 3, 2);


--
-- Name: user_info_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.user_info_user_id_seq', 24, true);


--
-- Name: user_info user_info_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_info_name_key UNIQUE (name);


--
-- Name: user_info user_info_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_info_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

